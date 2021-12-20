package com.guns.loja.controller;
import com.guns.loja.model.ItemEntity;
import com.guns.loja.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/itens")
@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @GetMapping
    public ResponseEntity <List<ItemEntity>>findAll(){
        return new ResponseEntity<List<ItemEntity>>
                ((List<ItemEntity>)this.itemRepository.findAll(),
                        new HttpHeaders(),HttpStatus.OK);
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity<ItemEntity> findById(@PathVariable("id") long id){
        if(this.itemRepository.findById(id).isPresent()){
            return new ResponseEntity<ItemEntity>(this.itemRepository.findById(id).get(),
                    new HttpHeaders(),HttpStatus.OK);
        }else{
            return new ResponseEntity<ItemEntity>(new HttpHeaders(),HttpStatus.NOT_FOUND);
        }

    }
    @PostMapping
    public ResponseEntity<ItemEntity> save (@RequestBody ItemEntity itemEntity){


        return  new ResponseEntity<ItemEntity>(
                this.itemRepository.save(itemEntity),new HttpHeaders(),HttpStatus.OK
        );
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<ItemEntity> update(@PathVariable("id") long id ,
                                              @RequestBody ItemEntity itemEntity)throws  Exception{
        if(id==0 ||!this.itemRepository.existsById(id)){
            throw  new Exception("Não encontrado!");
        }
        return new ResponseEntity<ItemEntity>(
                this.itemRepository.save(itemEntity),
                new HttpHeaders(),
                HttpStatus.OK);

    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<ItemEntity> delete(@PathVariable("id")long id ){
        this.itemRepository.deleteById(id);
        return new ResponseEntity<ItemEntity>(new HttpHeaders(),HttpStatus.OK);
    }

}


