package br.com.allteck.appCommerce.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import br.com.allteck.appCommerce.entity.Product;
import br.com.allteck.appCommerce.entity.ProductCategory;

@Configuration
public class RestDataConfig implements RepositoryRestConfigurer{
	
	private EntityManager entityManager;
	
	@Autowired
	public RestDataConfig(EntityManager entityManager) {
		this.entityManager=entityManager;
	}
	
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
		
		exposeId(config);
	}

	private void exposeId(RepositoryRestConfiguration config) {
		Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
		List<Class> entityClasses = new ArrayList<>();
		for(EntityType entityType : entities) {
			entityClasses.add(entityType.getJavaType());
		}
		
		Class[] domainTypes = entityClasses.toArray(new Class[0]);
		config.exposeIdsFor(domainTypes);
		
	}
}
