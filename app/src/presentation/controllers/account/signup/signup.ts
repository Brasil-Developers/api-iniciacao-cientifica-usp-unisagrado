

import { Controller, HttpRequest, HttpResponse } from '../../../protocols';
import { badRequest, ok, serverError } from '../../../helpers/http-helper';
import { MissingParamError } from '../../../errors';
import { GenericError } from '../../../errors/generic-error';
const { User } = require('../../../../domain/models');

export class SignUpController implements Controller {
    constructor() {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const {
                nome,
                data_nasc,
                cpf,
                sexo,
                area_atuacao,
                numero_crfa,
                login,
                senha,
                senha_confirmacao,
                questao1,
                questao1_outro,
                questao2,
                questao2_outro,
                ciencia_confirmacao
            } = httpRequest.body;

            const requiredFields = ['nome', 'data_nasc', 'cpf', 'sexo', 'area_atuacao', 'numero_crfa', 'login', 'senha', 'senha_confirmacao', 'questao1', 'questao1_outro', 'questao2', 'questao2_outro', 'ciencia_confirmacao'];
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const exists = await User.findOne({
                where: {
                    login,
                },
            });

            if (exists) {
                return badRequest(new GenericError('Usuario com o login informado já existe.'));
            }

            const cryptSenha = await bcrypt.hash(senha, 10);

            const response = await User.create({
                nome,
                data_nasc,
                cpf,
                sexo,
                area_atuacao,
                numero_crfa,
                login,
                cryptSenha,
                questao1,
                questao1_outro,
                questao2,
                questao2_outro,
                ciencia_confirmacao
            });

            if (!response) {
                return badRequest(new GenericError('Erro ao criar usuario.'));
            }

            return ok({ data: response, message: 'Usuario criado com sucesso.' });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}