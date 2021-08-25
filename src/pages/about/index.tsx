import { InfoLayout } from "../../components/layouts/info/InfoLayout";

export const About = () => {
  return (
    <InfoLayout>
      <div className="container mx-auto max-w-screen-lg">
        <h3 className="text-4xl pt-10 mb-5 ">About</h3>
        <p className="mb-10">
          Relational algebra is a procedural query language that works on
          relational models. Relational Model represents how we can store data
          in the relational Database.The data is stored in the relational
          database in the form of table - which is termed as relation.The main
          application of relational algebra is to provide a theoretical model
          for relational database systems. It takes relations as input and
          relations as output. Its main concept is based on first order logic
          and set theory. First Order Logic (FOL) is also known as predicate
          logic. The relations algebra uses operators for querying that can be
          unary and binary. There are different types of operations in
          relational algebra. These operators can be used together to produce
          complex transformations of relations. Relational algebra can also be
          used for optimising queries in a database.
        </p>
      </div>
    </InfoLayout>
  );
};
