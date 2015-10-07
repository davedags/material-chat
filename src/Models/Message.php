<?php

namespace ChatApp\Models;

class Message {

    protected $text;
    protected $username;
    protected $type;
    const DEFAULT_TYPE = 'message';

    public function __construct($text = null) {
        $this->setText($text);
    }
    public function setText($text) {
        $this->text = $text;
    }
    public function getText() {
        return $this->text;
    }
    public function setUsername($username) {
        $this->username = $username;
    }
    public function getUsername() {
        return $this->username;
    }
    public function setType($type) {
        $this->type = $type;
    }
    public function getType() {
        return $this->type;
    }
    public function json() {
        return $this->__toString();
    }
    public function __toString() {
        return json_encode(
            array(
                'text' => $this->getText(),
                'type' => self::DEFAULT_TYPE,
                'username' => $this->getUsername()
            )
        );
        
    }

}