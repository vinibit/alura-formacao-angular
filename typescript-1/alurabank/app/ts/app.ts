// app/ts/app.js

const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));