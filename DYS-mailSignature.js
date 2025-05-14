<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script>
$(document).ready(function() {
    var userEmail = "usuario@empresa.com";
    var userName = "Usuário";
    var userJobTitle = "Colaborador";
    var imagemURL = ""; // URL da imagem, se necessário
    var imgTag = imagemURL ? `<img src="${imagemURL}" alt="Logo EMPRESA" style="width: 500px; height: auto; margin-bottom: 10px;">` : "";

    if (typeof _spPageContextInfo !== "undefined") {
        userEmail = _spPageContextInfo.userEmail || userEmail;
        userName = _spPageContextInfo.userDisplayName || userName;
        userJobTitle = _spPageContextInfo.userJobTitle || userJobTitle;
    }

    function gerarAssinatura(setor = "", cargo = "", ramal = "") {
        return `
            <div id='assinatura' style="font-family: Arial, sans-serif; color: #333; border-left: 4px solid #0078D4; padding-left: 10px;">
                <strong style="color: #1d9e4d;">${userName}</strong><br>
                <em>${cargo || userJobTitle} - ${setor}</em><br>
                <strong>EMPRESSA</strong><br><br>
                +55 00 0000-0000${ramal ? ` | ${ramal}` : ''}<br>
                <a href="mailto:${userEmail}" style="color: #1d9e4d;">${userEmail}</a><br>
                <a href="https://www.SEUSITE.com" target="_blank" style="color: #1d9e4d;">www.EMPRESA.com</a><br><br>
                <strong>EMPRESA | by Performance</strong><br>
                ${imgTag}
            </div>
        `;
    }

    $("#preview").html(gerarAssinatura());

    $("#configurarBtn").click(function() {
        $("#configuracaoForm").toggle();
    });

    $("#updateBtn").click(function() {
        var setor = $("#setor").val();
        var cargo = $("#cargo").val();
        var ramal = $("#ramal").val();
        $("#preview").html(gerarAssinatura(setor, cargo, ramal));
        $("#configuracaoForm").slideUp(); // Fecha suavemente o formulário
    });

    $("#downloadBtn").click(function() {
        var setor = $("#setor").val();
        var cargo = $("#cargo").val();
        var ramal = $("#ramal").val();
        var assinaturaAtualizada = gerarAssinatura(setor, cargo, ramal);

        var blob = new Blob([assinaturaAtualizada], { type: "text/html" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "assinatura.html";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert("Sua assinatura foi baixada com sucesso!");
    });

    $("#copyBtn").click(function() {
        var assinatura = document.getElementById("preview");
        var range = document.createRange();
        var selection = window.getSelection();
        selection.removeAllRanges();
        range.selectNodeContents(assinatura);
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
        alert("Assinatura copiada!");
    });

    $("#installBtn").click(function() {
        $("#tutorialImagem").fadeIn();
    });
});
</script>

<h2>Assinatura de E-mail</h2>
<p>Abaixo está a sua assinatura personalizada:</p>
<p>Edite a assinatura clicando no botão "EDITAR ASSINATURA"</p>
<!-- Assinatura Preview -->
<div id="preview"></div>

<!-- Botões -->
<button id="configurarBtn" style="padding: 10px; background: green; color: white; border: none; cursor: pointer;">Editar Assinatura</button>
<button id="copyBtn" style="padding: 10px; background: orange; color: white; border: none; cursor: pointer;">Copiar Assinatura</button>
<button id="downloadBtn" style="padding: 10px; background: blue; color: white; border: none; cursor: pointer;">Baixar Assinatura</button>
<button id="installBtn" style="padding: 10px; background: purple; color: white; border: none; cursor: pointer;">Instalar Assinatura</button>

<!-- Formulário de Configuração -->
<div id="configuracaoForm" style="display: none; margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
    <h3>Configurações da Assinatura</h3>
    <label for="setor">Setor:</label>
    <input type="text" id="setor" placeholder="Digite seu setor"><br><br>
    <label for="cargo">Cargo:</label>
    <input type="text" id="cargo" placeholder="Digite seu cargo"><br><br>
    <label for="ramal">Ramal:</label>
    <input type="text" id="ramal" placeholder="Digite o número do ramal"><br><br>
    <button id="updateBtn" style="padding: 8px 15px; background-color: #0078D4; color: white; border: none; cursor: pointer;">Atualizar Assinatura</button>
</div>

<!-- Imagem tutorial de instalação -->
<div id="tutorialImagem" style="display: none; margin-top: 20px;">
    <h3>Como instalar sua assinatura:</h3>
    
    <p>- Copie sua assinatura personalizada acima.</p>
    
    <p>
        - Acesse 
        <a href="https://outlook.office.com/mail/options/accounts-category/signatures-subcategory" target="_blank" rel="noopener noreferrer">
            Configuração de assinatura Outlook
        </a> e cole sua assinatura como mostra a imagem abaixo:
    </p>
    
    <img src="https://i.imgur.com/.png" alt="Tutorial de instalação da assinatura no Outlook Web" style="max-width: 100%; border: 1px solid #ccc; border-radius: 8px;">
</div>


<!-- CSS Customizado -->
<style>
    #preview {
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 8px;
        background-color: transparent;
        border: none;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }

    @media (max-width: 600px) {
        #preview {
            font-size: 14px;
        }
        img {
            width: 100%;
        }
    }
</style>
