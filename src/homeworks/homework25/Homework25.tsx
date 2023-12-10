import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/input";
import Button from "components/button";

import {
  Homework25Wrapper,
  ShopForm,
  ProductCard,
  ProductInfoContainer,
  ProductParBig,
  ProductParSmall,
  Checkbox,
  ErrorContainer,
  Text,
} from "./styles";

// этот интерфейс для типизации в формике вообще необязателен
interface FormValues {
  productName: string;
  productPrice: string;
  productDescription: string;
  termsOfUse: boolean;
}

interface Product {
  productName: string;
  productPrice: string;
  productDescription: string;
}

function Homework25() {
  // Создаем state, в котором будут храниться данные созданного продукта в виде объекта и с помощью этого стейта будет отображаться карточка
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .required("Необходимо ввести название товара")
      .min(2, "Минимальное количество символов: 2")
      .max(100, "Максимальное количество символов: 100"),
    productPrice: Yup.number()
      .typeError("Цена товара длжна быть числом")
      .required("Необходимо ввести цену товара")
      // max в number работает по-другому, 15 - не максимальное количество символов,
      // а максимальное число
      .test("len", "Max 15 numbers", (val) => val.toString().length <= 15),
    // .max(1500, "Максимальная цена: 1500"),
    productDescription: Yup.string().max(
      150,
      "Максимальное количество символов: 150"
    ),
    termsOfUse: Yup.boolean().oneOf([true], 'Необходимо поставить "галочку"'),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productDescription: "",
      termsOfUse: false,
    } as FormValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("submit");

      setProduct({
        productName: values.productName,
        productPrice: values.productPrice,
        productDescription: values.productDescription,
      });
    },
  });

  return (
    <Homework25Wrapper>
      <ShopForm onSubmit={formik.handleSubmit}>
        <Text>Создание товара</Text>
        <Input
          label="Название товара*"
          placeholder="Введите название товара"
          name="productName"
          value={formik.values.productName}
          onChange={formik.handleChange}
          error={formik.errors.productName}
        />
        <Input
          label="Цена товара*"
          placeholder="Введите цену товара"
          name="productPrice"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          error={formik.errors.productPrice}
        />
        <p>Описание товара</p>
        <textarea          
          placeholder="Введите описание товара"
          name="productDescription"          
          value={formik.values.productDescription}
          onChange={formik.handleChange}          
        />
        <p>Правило использования*</p>
        <Checkbox          
          onChange={formik.handleChange}
          name="termsOfUse"
          type="checkbox"          
        />
        <ErrorContainer>{formik.errors.termsOfUse}</ErrorContainer>
        <Button name="Создать товар" type="submit"></Button>
        <Text>* - обязательное поле</Text>
      </ShopForm>
      {product && (
        <ProductCard>
          <ProductInfoContainer>
            <ProductParSmall>Название товара</ProductParSmall>
            <ProductParBig>{product?.productName}</ProductParBig>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ProductParSmall>Цена товара</ProductParSmall>
            <ProductParBig>{product?.productPrice}</ProductParBig>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ProductParSmall>Описание товара</ProductParSmall>
            <ProductParBig>{product?.productDescription}</ProductParBig>
          </ProductInfoContainer>
        </ProductCard>
      )}
    </Homework25Wrapper>
  );
}

export default Homework25;
