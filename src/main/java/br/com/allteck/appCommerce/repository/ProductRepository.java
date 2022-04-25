package br.com.allteck.appCommerce.repository;



import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.allteck.appCommerce.entity.Product;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "product", path = "product")
public interface ProductRepository extends JpaRepository<Product, Long>{
	Page<Product> findByCategoryNameId(@RequestParam("id")Long id, Pageable pageable); 
	Page<Product> findByNameContaining(@RequestParam("name")String name, Pageable pageable);
}
