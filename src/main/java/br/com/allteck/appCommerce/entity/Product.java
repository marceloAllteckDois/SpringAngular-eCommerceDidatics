package br.com.allteck.appCommerce.entity;

import java.io.Serializable;
import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="product")
public class Product implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -831382831525753736L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String sku;
	private String name;
	private String description;
	private Double unitPrice;
	private String urlImage;
	private boolean active;
	private int unitsInStock;
	private Calendar dateTimeCreation;
	private Calendar lastTimeUpdated;
	@ManyToOne
	private ProductCategory categoryName;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}
	public String getUrlImage() {
		return urlImage;
	}
	public void setUrlImage(String urlImage) {
		this.urlImage = urlImage;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public int getUnitsInStock() {
		return unitsInStock;
	}
	public void setUnitsInStock(int unitsInStock) {
		this.unitsInStock = unitsInStock;
	}
	public Calendar getDateTimeCreation() {
		return dateTimeCreation;
	}
	public void setDateTimeCreation(Calendar dateTimeCreation) {
		this.dateTimeCreation = dateTimeCreation;
	}
	public Calendar getLastTimeUpdated() {
		return lastTimeUpdated;
	}
	public void setLastTimeUpdated(Calendar lastTimeUpdated) {
		this.lastTimeUpdated = lastTimeUpdated;
	}
	public ProductCategory getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(ProductCategory categoryName) {
		this.categoryName = categoryName;
	}
	public Product(Long id, String sku, String name, String description, Double unitPrice, String urlImage,
			boolean active, int unitsInStock, Calendar dateTimeCreation, Calendar lastTimeUpdated,
			ProductCategory categoryName) {
		super();
		this.id = id;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitPrice = unitPrice;
		this.urlImage = urlImage;
		this.active = active;
		this.unitsInStock = unitsInStock;
		this.dateTimeCreation = dateTimeCreation;
		this.lastTimeUpdated = lastTimeUpdated;
		this.categoryName = categoryName;
	}
	public Product() {
		
	}
}
