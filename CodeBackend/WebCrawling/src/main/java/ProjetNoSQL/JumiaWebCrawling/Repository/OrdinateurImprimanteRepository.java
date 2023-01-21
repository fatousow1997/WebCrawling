package ProjetNoSQL.JumiaWebCrawling.Repository;

import ProjetNoSQL.JumiaWebCrawling.Model.Informatique.OrdinateurImprimante;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdinateurImprimanteRepository extends MongoRepository<OrdinateurImprimante, Integer> {
}
