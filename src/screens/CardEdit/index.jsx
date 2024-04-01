import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardForm } from "../../components/common/CardForm";

const CardEditPage = () => {
  const [initialValues, setInitialValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          `https://65fc4e419fc4425c652fb699.mockapi.io/card/${id}`
        );

        setInitialValues(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      fetchCard();
    }
  }, [id, initialValues, loading]);

  return (
    <CardForm initialValues={initialValues.length !== 0 ? initialValues : {}} />
  );
};

export { CardEditPage };
