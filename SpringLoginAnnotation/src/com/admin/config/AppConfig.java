package com.admin.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan({"com.admin.config","com.admin.controller", "com.admin.dao", "com.admin.daoImpl", "com.admin.model"})
public class AppConfig {

}
