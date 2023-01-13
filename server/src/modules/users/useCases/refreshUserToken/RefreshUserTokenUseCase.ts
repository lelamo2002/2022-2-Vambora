import { GenerateRefreshToken } from "@modules/users/provider/GenerateRefreshToken"
import { GenerateToken } from "@modules/users/provider/GenerateToken"
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository"
import { AppError } from "@shared/errors/AppError"
import dayjs from "dayjs"
import { inject, injectable } from "tsyringe"

@injectable()
class RefreshUserTokenUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute(refresh_token: string) {
    const refreshToken = await this.usersRepository.findRefreshToken(refresh_token)

    if (!refreshToken) {
      throw new AppError("Invalid refresh token")
    }

    const generateToken = new GenerateToken()
    const token = await generateToken.execute(refreshToken.userId)

    const isTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn))

    if (isTokenExpired) {
      await this.usersRepository.deleteUserRefreshToken(refreshToken.userId)

      const generateRefreshToken = new GenerateRefreshToken()
      const newRefreshToken = await generateRefreshToken.execute(refreshToken.userId)

      return { token, refreshToken: newRefreshToken }
    }

    return { token }
  }
}

export { RefreshUserTokenUseCase }