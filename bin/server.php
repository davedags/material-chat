<?php
use Ratchet\Server\IoServer;
use ChatApp\Chat;

require dirname(__DIR__) . '/vendor/autoload.php';


$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat()
        )
    ),
            8080
);

$server->run();