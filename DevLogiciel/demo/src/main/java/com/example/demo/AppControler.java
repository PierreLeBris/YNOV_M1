package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/")
public class AppControler {

    @RequestMapping(path = "/hi")
    public String sayHi(){
        return "Bonjour";
    }
}
