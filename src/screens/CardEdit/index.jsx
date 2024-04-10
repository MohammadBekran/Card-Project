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
      const response = await getCardDetail(id);

      setInitialValues(response);
      setLoading(false);
    };

    if (loading) {
      fetchCard();
    }
  }, [id, initialValues, loading]);

  return <CardForm initialValues={initialValues} />;
};

export { CardEditPage };
