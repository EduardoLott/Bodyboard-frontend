export class User {
  constructor(
    public phone: string,
    public fullName: string,
    public dateOfBirth: Date,
    public email: string,
    public cpf: string,
    public password: string,
    public confirmPassword: string,
    public state: string,
    public athleteName: string
  ) {}
}