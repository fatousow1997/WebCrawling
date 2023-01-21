package ProjetNoSQL.JumiaWebCrawling.Repository;

import ProjetNoSQL.JumiaWebCrawling.Model.Electromenager.Refrigerateur;
import ProjetNoSQL.JumiaWebCrawling.Model.TelephoneIphone.IphoneTel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IphoneTelRepoJumia extends MongoRepository<IphoneTel, Integer>{
}

