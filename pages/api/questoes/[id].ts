import questoes from '../bancoDeQuestoes';
export default function handler(req, res) {
    const idSelecionado = +req.query.id

    const unicaQuestaoSelc = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoSelc.length === 1) {
        const questaoSelecionada = unicaQuestaoSelc[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        res.status(204).send()
    }


}