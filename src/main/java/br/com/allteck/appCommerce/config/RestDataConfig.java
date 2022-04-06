package br.com.allteck.appCommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import br.com.allteck.appCommerce.entity.Product;
import br.com.allteck.appCommerce.entity.ProductCategory;

@Configuration
public class RestDataConfig implements RepositoryRestConfigurer{
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,CorsRegistry cors) {
		HttpMethod[] unsurpotedActions = {HttpMethod.PUT,HttpMethod.DELETE,HttpMethod.POST};
		config.getExposureConfiguration()
		.forDomainType(Product.class)
		.withItemExposure((metdata,httpMethods)->httpMethods.disable(unsurpotedActions))
		.withCollectionExposure((metdata,httpMethods)->httpMethods.disable(unsurpotedActions));
		
		config.getExposureConfiguration()
		.forDomainType(ProductCategory.class)
		.withItemExposure((metdata,httpMethods)->httpMethods.disable(unsurpotedActions))
		.withCollectionExposure((metdata,httpMethods)->httpMethods.disable(unsurpotedActions));
	}
}
