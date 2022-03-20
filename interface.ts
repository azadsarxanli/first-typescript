interface Product {
  id: number;
  name: string;
  unitPrice: number;
}
function save(product: Product) {
  console.log(product.name + " Saved");
}

save({ id: 1, name: "PC", unitPrice: 500 });

interface PersonService {
  save(): void;
}
class CustomerService implements PersonService {
  save(): void {
    throw new Error("Method not implemented.");
  }
}
