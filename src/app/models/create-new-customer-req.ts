import{Customer} from '../models/customer';
import { CustomerTypeEnum } from './customer-type-enum.enum';

export class CreateNewCustomerReq {

    customerEntity: Customer | undefined;
    
  constructor(customer?: Customer) {
      this.customerEntity = customer;

  }
}
