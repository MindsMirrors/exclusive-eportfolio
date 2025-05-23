// service id: service_b4ljtdq
// template id: template_riy47md
// public key: 062q_Bv8wEA_oTv6Z

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_b4ljtdq',
            'template_riy47md',
            event.target,
            '062q_Bv8wEA_oTv6Z'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at michaeljtrujillo92@gmail.com"
        );

    })
}