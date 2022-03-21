
import jwt from 'jsonwebtoken';
import { Controller, HttpRequest, HttpResponse } from '../../../protocols';
import { ok, serverError } from '../../../helpers/http-helper';
const { User } = require('../../../../domain/models');

export class SignInController implements Controller {
    constructor() {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const user = await User.findOne({
                where: {
                    email: httpRequest.body.login,
                    password: httpRequest.body.password,
                },
                attributes: ['id'],
            });

            if (!user) {
                throw new Error('Usuário ou senha inválidos.');
            }

            const id = Number(user.id);
            const token = jwt.sign({ id }, 'teste', {
                expiresIn: 300,
            });
            return ok({ auth: true, token_auth: token });

        } catch (error: any) {
            return serverError(error);
        }
    }
}