import * as jwt from "jsonwebtoken"

class GenerateToken {
  async execute(userId: string) {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET || "fake jwt secret for testing", {
      subject: userId,
      expiresIn: "1d"
    })

    return token
  }
}

export { GenerateToken }