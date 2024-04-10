import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCardDetail } from "../../core/services/api/getCardDetail.api";

import { CardForm } from "../../components/common/CardForm";

const CardEditPage = () => {
  const [initialValues, setInitialValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await getCardDetail(id);

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
