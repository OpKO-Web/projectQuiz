import questoes from '../bancoDeQuestoes';
import { embaralhar } from '../../../functions/arrays';

//Gerando as perguntas de maneira aleatória

export default (req, res) => {
    const ids = questoes.map(questao => questao.id)

    res.status(200).json(embaralhar(ids))
}