package com.guns.loja.model;

//public class ItemEntity {
//}
import lombok.*;
        import org.springframework.stereotype.Component;

        import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Component
@Entity
@Table(name = "item")
public class ItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idItem")
    private long idItem;

    @Column(name="marca")
    private String marca;

    @Column(name="modelo")
    private  String modelo;

    @Column(name="calibre")
    private  String calibre;

    @Column(name="imagem")
    private  String imagem;

}

