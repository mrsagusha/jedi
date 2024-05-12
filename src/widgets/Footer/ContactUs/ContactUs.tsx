'use client';

import type { ReactElement } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { Input } from '@/shared/ui/Input/Input';
import { BUTTON_STYLES, TEXTFIELD_ROWS_NUMBER } from '@/widgets/Footer/ContactUs/model/constants';
import { OperationFormData } from '@/lib/types';
import { useValidation } from '@/lib/hooks/useValidation';

import colors from '@/shared/styles/variables.module.scss';
import classes from './ContactUs.module.scss';

const ContactUs = (): ReactElement => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<OperationFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const validationRules = useValidation();

  const onSubmit = (): void => {
    window.alert(`Name: ${getValues().name}, Email: ${getValues().email}, Message: ${getValues().message}`);
  };

  return (
    <Box className={classes.contacts}>
      <Typography className={classes.title}>CONTACT US</Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Your Name*:"
          variant="outlined"
          name="name"
          control={control}
          validationRules={validationRules.name}
          errors={errors}
        />
        <Input
          label="Your Email*:"
          variant="outlined"
          name="email"
          control={control}
          validationRules={validationRules.email}
          errors={errors}
        />
        <Input
          label="Message:"
          variant="outlined"
          name="message"
          control={control}
          errors={errors}
          multiline
          maxRows={TEXTFIELD_ROWS_NUMBER}
          styles={{
            '& .MuiInputBase-root': {
              height: '80px',
              color: colors.white,
            },
          }}
        />
        <Button type="submit" variant="contained" sx={BUTTON_STYLES}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export { ContactUs };
