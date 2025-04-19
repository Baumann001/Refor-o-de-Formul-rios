document.addEventListener('DOMContentLoaded', function () {
    const nomeCompletoInput = document.getElementById('nomeCompleto');
    const dataNascimentoInput = document.getElementById('dataNascimento');
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

    function displayError(fieldId, message) {
        if (errorMessages[fieldId]){
            errorMessages[fieldId].textContent = message;
        }
    }

    function clearError(fieldId) {
        if (errorMessages[fieldId]) {
            errorMessages[fieldId].textContent = '';
        }
    }

    function validarNome(nome) {
        if (!nome) {
            errorMessages.nomeCompleto.textContent = 'O nome completo é obrigatório.';
            return false;
        } else if (nome.trim().length < 3) {
            errorMessages.nomeCompleto.textContent = 'O nome deve ter pelo menos 3 caracteres.';
            return false;
        } else if (!/^[A-Za-zÀ-ú\s]+$/.test(nome)) {
            errorMessages.nomeCompleto.textContent = 'O nome completo deve conter apenas letras e espaços.';
            return false;
        } else {
            clearError('nomeCompleto');
            return true;
        }
    }

    // Adicionando o ouvinte de evento para o campo nomeCompleto
    nomeCompletoInput.addEventListener('blur', function() {
        validarNome(this.value);
    });
});

function validarDataNascimento(dataNascimento) {
    if (!dataNascimento) {
        errorMessages.dataNascimento.textContent = "A data de nascimento é obrigatória.";
        return false;
    } else if (dataNascimento.trim().length < 8) {
        errorMessages.dataNascimento.textContent = "A data de nascimento deve ser preenchida corretamente.";
        return false;
    } else {
        // Adicione aqui a lógica para validar o formato da data (ex: DD/MM/AAAA ou AAAA-MM-DD)
        // e possivelmente verificar se é uma data válida.

        // Exemplo básico para verificar o formato AAAA-MM-DD (o tipo "date" do input já ajuda com isso):
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)) {
            errorMessages.dataNascimento.textContent = "Formato de data inválido (AAAA-MM-DD).";
            return false;
        }

        // Se passou por todas as verificações, a data é considerada válida por enquanto
        errorMessages.dataNascimento.textContent = "";
        return true;
    }
}

// Não se esqueça de anexar o ouvinte de evento ao campo 'dataNascimentoInput':
dataNascimentoInput.addEventListener('blur', function() {
    validarDataNascimento(this.value);
});
    

    
