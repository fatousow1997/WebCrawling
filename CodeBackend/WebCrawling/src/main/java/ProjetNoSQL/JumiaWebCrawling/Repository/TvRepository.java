package ProjetNoSQL.JumiaWebCrawling.Repository;

import ProjetNoSQL.JumiaWebCrawling.Model.Electronic.Tv;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TvRepository extends MongoRepository<Tv,Integer> {


}
