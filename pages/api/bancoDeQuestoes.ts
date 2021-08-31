import QuestaoModel from '../../model/questao';
import RespostaModel from '../../model/resposta';

const questoes: QuestaoModel[] = [
    new QuestaoModel(300, 'Qual inseto transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Formiga'),
        RespostaModel.errada('Besouro'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(305, 'Qual a capital de Tocantins?', [
        RespostaModel.errada('Teresina'),
        RespostaModel.errada('Maceio'),
        RespostaModel.errada('Juazeiro'),
        RespostaModel.certa('Palmas'),
    ]),
    new QuestaoModel(310, 'Qual o coletivo de cães?', [
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Bando'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(315, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Trapézio'),
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(320, 'As cores do padrão RGB são?', [
        RespostaModel.errada('Azul, Verde, Rosa'),
        RespostaModel.errada('Roxo, Vermelho, Branco'),
        RespostaModel.errada('Azul, Verde, Branco'),
        RespostaModel.certa('Vermelha, Verde, Azul'),
    ])

]

export default questoes