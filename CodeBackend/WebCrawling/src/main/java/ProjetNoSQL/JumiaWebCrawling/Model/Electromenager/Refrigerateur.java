package ProjetNoSQL.JumiaWebCrawling.Model.Electromenager;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "electromenager_refrigerateur")
public class Refrigerateur {
    @Id
    private  String _id;
    private  String image;
    private  String name;
    private  String new_price;
    private  String old_price;
}
