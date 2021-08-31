import questoes from '../bancoDeQuestoes';
export default function handler(req, res) {
    const idSelecionado = +req.query.id

    const unicaQuestaoSelc = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoSelc.length === 1) {
        const questaoSelecionada = unicaQuestaoSelc[0].embaralharRespostas()
        const obj = questaoSelecionada.responderCom(0).paraObjeto()
        res.status(200).json(obj)
    } else {
        res.status(204).send()
    }


}