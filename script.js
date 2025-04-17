 document.addEventListener('DOMContentLoaded', function () {
    const nomeCompletoInput= getElementById('nomeCompleto');
    const dataNascimentoInput = getElementById('dataNascimento');
    const cpfInput = document.getElementById('cpf');
    const estadoInput = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade');
    const bairroInput = document.getElementById('bairro');
    const ruaInput = document.getElementById('rua');
    const numeroInput = document.getElementById('numero');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const profissaoInput = document.getElementById('profissao');
    const empresaInput = document.getElementById('empresa');
    const cargoInput = document.getElementById('cargo');
    const tempoExperienciaSelect = document.getElementById('tempoExperiencia');
    const nivelEscolaridadeProfissionalSelect = document.getElementById('nivelEscolaridadeProfissional');
    const areaAtuacaoInput = document.getElementById('areaAtuacao');
    const habilidadesTextarea = document.getElementById('habilidades');
    const sexoRadios = document.querySelectorAll('input[name="sexo"]'); 
    
    const errorMessages = {
        nomeCompleto: document.getElementById('nomeCompletoError'),
        dataNascimento: document.getElementById('dataNascimentoError'),
        cpf: document.getElementById('cpfError'),
        estado: document.getElementById('estadoError'),
        cidade: document.getElementById('cidadeError'),
        bairro: document.getElementById('bairroError'),
        rua: document.getElementById('ruaError'),
        numero: document.getElementById('numeroError'),
        email: document.getElementById('emailError'),
        telefone: document.getElementById('telefoneError'),
        profissao: document.getElementById('profissaoError'),
        empresa: document.getElementById('empresaError'),
        cargo: document.getElementById('cargoError'),
        tempoExperiencia: document.getElementById('tempoExperienciaError'),
        nivelEscolaridadeProfissional: document.getElementById('nivelEscolaridadeProfissionalError'),
        areaAtuacao: document.getElementById('areaAtuacaoError'),
        habilidades: document.getElementById('habilidadesError'),
        sexo: document.getElementById('sexoError' )
    };


 }

