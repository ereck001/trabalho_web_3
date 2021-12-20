package com.guns.loja.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.guns.loja.model.ItemEntity;
@Repository
public interface ItemRepository extends CrudRepository<ItemEntity, Long > {

}
