package ProjetNoSQL.JumiaWebCrawling.Repository;

import ProjetNoSQL.JumiaWebCrawling.Model.TabletteTactile.Tablette;
import ProjetNoSQL.JumiaWebCrawling.Model.TelephoneIphone.IphoneTel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TabletteRepoJumia extends MongoRepository<Tablette, Integer>{
}

