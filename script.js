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
    const formulario = document.querySelector('form');

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
        sexo: document.getElementById('sexoError')
    };

    function displayError(fieldId, message) {
        if (errorMessages[fieldId]) {
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
            displayError('nomeCompleto', 'O nome completo é obrigatório.');
            return false;
        } else if (nome.trim().length < 3) {
            displayError('nomeCompleto', 'O nome deve ter pelo menos 3 caracteres.');
            return false;
        } else if (!/^[A-Za-zÀ-ú\s]+$/.test(nome)) {
            displayError('nomeCompleto', 'O nome completo deve conter apenas letras e espaços.');
            return false;
        } else {
            clearError('nomeCompleto');
            return true;
        }
    }

    function validarDataNascimento(dataNascimento) {
        if (!dataNascimento) {
            displayError('dataNascimento', "A data de nascimento é obrigatória.");
            return false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)) {
            displayError('dataNascimento', "Formato de data inválido (AAAA-MM-DD).");
            return false;
        } else {
            clearError('dataNascimento');
            return true;
        }
    }

    function validarCPF(cpf) {
        if (!cpf) {
            displayError('cpf', 'O CPF é obrigatório.');
            return false;
        } else {
            cpf = cpf.replace(/[^\d]+/g, '');
            if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
                displayError('cpf', 'CPF inválido.');
                return false;
            }
            let soma = 0;
            let resto;
            for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            resto = (soma * 10) % 11;
            if ((resto === 10) || (resto === 11)) resto = 0;
            if (resto !== parseInt(cpf.substring(9, 10))) {
                displayError('cpf', 'CPF inválido.');
                return false;
            }
            soma = 0;
            for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            resto = (soma * 10) % 11;
            if ((resto === 10) || (resto === 11)) resto = 0;
            if (resto !== parseInt(cpf.substring(10, 11))) {
                displayError('cpf', 'CPF inválido.');
                return false;
            }
            clearError('cpf');
            return true;
        }
    }

    function validarCampoObrigatorio(valor, fieldId, mensagem) {
        if (!valor || valor.trim() === '') {
            displayError(fieldId, mensagem);
            return false;
        } else {
            clearError(fieldId);
            return true;
        }
    }

    function validarEmail(email) {
        if (!email) {
            displayError('email', 'O email é obrigatório.');
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            displayError('email', 'Formato de email inválido.');
            return false;
        } else {
            clearError('email');
            return true;
        }
    }

    function validarTelefone(telefone) {
        if (!telefone) {
            displayError('telefone', 'O telefone é obrigatório.');
            return false;
        } else if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
            displayError('telefone', 'Formato de telefone inválido ((XX) XXXXX-XXXX ou (XX) XXXX-XXXX).');
            return false;
        } else {
            clearError('telefone');
            return true;
        }
    }

    function validarTempoExperiencia(tempo) {
        if (!tempo) {
            displayError('tempoExperiencia', 'Selecione o tempo de experiência.');
            return false;
        } else {
            clearError('tempoExperiencia');
            return true;
        }
    }

    function validarNivelEscolaridadeProfissional(nivel) {
        if (!nivel) {
            displayError('nivelEscolaridadeProfissional', 'Selecione o nível de escolaridade.');
            return false;
        } else {
            clearError('nivelEscolaridadeProfissional');
            return true;
        }
    }

    function validarSexo() {
        const checkedSexo = Array.from(sexoRadios).some(radio => radio.checked);
        if (!checkedSexo) {
            displayError('sexo', 'Selecione o sexo.');
            return false;
        } else {
            clearError('sexo');
            return true;
        }
    }

    nomeCompletoInput.addEventListener('blur', function () {
        validarNome(this.value);
    });
    nomeCompletoInput.addEventListener('input', function () {
        validarNome(this.value);
    });


    dataNascimentoInput.addEventListener('blur', function () {
        validarDataNascimento(this.value);
    });
    dataNascimentoInput.addEventListener('input', function () {
        validarDataNascimento(this.value);
    });

    cpfInput.addEventListener('blur', function () {
        validarCPF(this.value);
    });
    cpfInput.addEventListener('input', function () {
        validarCPF(this.value);
    });

    estadoInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'estado', 'O estado é obrigatório.');
    });
     estadoInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'estado', 'O estado é obrigatório.');
    });

    cidadeInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'cidade', 'A cidade é obrigatória.');
    });
    cidadeInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'cidade', 'A cidade é obrigatória.');
    });

    bairroInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'bairro', 'O bairro é obrigatório.');
    });
    bairroInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'bairro', 'O bairro é obrigatório.');
    });

    ruaInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'rua', 'A rua é obrigatória.');
    });
    ruaInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'rua', 'A rua é obrigatória.');
    });

    numeroInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'numero', 'O número é obrigatório.');
    });
    numeroInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'numero', 'O número é obrigatório.');
    });

    emailInput.addEventListener('blur', function () {
        validarEmail(this.value);
    });
    emailInput.addEventListener('input', function () {
        validarEmail(this.value);
    });

    telefoneInput.addEventListener('blur', function () {
        validarTelefone(this.value);
    });
     telefoneInput.addEventListener('input', function () {
        validarTelefone(this.value);
    });

    profissaoInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'profissao', 'A profissão é obrigatória.');
    });
    profissaoInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'profissao', 'A profissão é obrigatória.');
    });

    empresaInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'empresa', 'A empresa é obrigatória.');
    });
     empresaInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'empresa', 'A empresa é obrigatória.');
    });

    cargoInput.addEventListener('blur', function () {
        validarCampoObrigatorio(this.value, 'cargo', 'O cargo é obrigatório.');
    });
    cargoInput.addEventListener('input', function () {
        validarCampoObrigatorio(this.value, 'cargo', 'O cargo é obrigatório.');
    });

    tempoExperienciaSelect.addEventListener('blur', function () {
        validarTempoExperiencia(this.value);
    });
    tempoExperienciaSelect.addEventListener('change', function () {
        validarTempoExperiencia(this.value);
    });

    nivelEscolaridadeProfissionalSelect.addEventListener('blur', function () {
        validarNivelEscolaridadeProfissional(this.value);
    });
    nivelEscolaridadeProfissionalSelect.addEventListener('change', function () {
        validarNivelEscolaridadeProfissional(this.value);
    });

    sexoRadios.forEach(radio => {
        radio.addEventListener('change', validarSexo);
    });

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let hasErrors = false;

        if (!validarNome(nomeCompletoInput.value)) hasErrors = true;
        if (!validarDataNascimento(dataNascimentoInput.value)) hasErrors = true;
        if (!validarCPF(cpfInput.value)) hasErrors = true;
        if (!validarCampoObrigatorio(estadoInput.value, 'estado', 'O estado é obrigatório.')) hasErrors = true;
        if (!validarCampoObrigatorio(cidadeInput.value, 'cidade', 'A cidade é obrigatória.')) hasErrors = true;
        if (!validarCampoObrigatorio(bairroInput.value, 'bairro', 'O bairro é obrigatório.')) hasErrors = true;
        if (!validarCampoObrigatorio(ruaInput.value, 'rua', 'A rua é obrigatória.')) hasErrors = true;
        if (!validarCampoObrigatorio(numeroInput.value, 'numero', 'O número é obrigatório.')) hasErrors = true;
        if (!validarEmail(emailInput.value)) hasErrors = true;
        if (!validarTelefone(telefoneInput.value)) hasErrors = true;
        if (!validarCampoObrigatorio(profissaoInput.value, 'profissao', 'A profissão é obrigatória.')) hasErrors = true;
        if (!validarCampoObrigatorio(empresaInput.value, 'empresa', 'A empresa é obrigatória.')) hasErrors = true;
        if (!validarCampoObrigatorio(cargoInput.value, 'cargo', 'O cargo é obrigatório.')) hasErrors = true;
        if (!validarTempoExperiencia(tempoExperienciaSelect.value)) hasErrors = true;
        if (!validarNivelEscolaridadeProfissional(nivelEscolaridadeProfissionalSelect.value)) hasErrors = true;
        if (!validarSexo()) hasErrors = true;


        if (!hasErrors) {
            alert('Formulário enviado com sucesso!');
            formulario.submit();
        }
    });
});