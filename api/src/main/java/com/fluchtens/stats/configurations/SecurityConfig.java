package com.fluchtens.stats.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http
			.authorizeHttpRequests((requests) -> requests
				.requestMatchers("/").permitAll()
				.anyRequest().authenticated()
			)
			.exceptionHandling((exceptions) -> exceptions
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
            )
			.oauth2Login((oauth2) -> oauth2
				.loginPage("/oauth2/authorization/github")
				.defaultSuccessUrl("http://localhost:4200", true)
			)
			.logout((logout) -> logout
				.logoutUrl("/logout")
				.logoutSuccessHandler((request, response, authentication) -> {
					// Actions à effectuer après la déconnexion
					response.sendRedirect("/"); // Redirection vers la page d'accueil par exemple
				})
			)
			.build();
	}
}
