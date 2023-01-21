package ProjetNoSQL.JumiaWebCrawling.Repository;

import ProjetNoSQL.JumiaWebCrawling.Model.Electromenager.Refrigerateur;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RefrigerateurRepository extends MongoRepository<Refrigerateur, Integer> {
}
