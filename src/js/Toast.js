function Toast(icon, message, classes){

    let toast = `
    <div role="alert" aria-live="assertive" aria-atomic="true" class="toast ${classes}" data-autohide="false" id="${message.replace(/\s/g, "_")}">
        <div class="toast-header">
            <strong class="mr-auto"></strong>
            <small>Mensagens do sistema</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            ${icon} <span>${message}</span>
        </div>
    </div>`;

    return toast;
}