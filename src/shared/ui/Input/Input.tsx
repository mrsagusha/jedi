'use client';

import {
  Box,
  InputAdornment,
  type SxProps,
  TextField,
  type TextFieldVariants,
  type Theme,
  Typography,
} from '@mui/material';
import type { FC, ReactElement } from 'react';
import { type Control, Controller, type FieldErrors, RegisterOptions } from 'react-hook-form';
import Image from 'next/image';

import { ICON_HEIGHT, ICON_WIDTH, INPUT_STYLES } from '@/shared/ui/Input/model/constants';
import { OperationFormData } from '@/lib/types';

import classes from './Input.module.scss';

type ValidationRules = Omit<
  RegisterOptions<OperationFormData, 'name' | 'email' | 'message'>,
  'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

interface InputProps {
  label: string;
  variant: TextFieldVariants;
  name: 'name' | 'email' | 'message';
  control: Control<OperationFormData>;
  errors: FieldErrors<OperationFormData>;
  validationRules?: ValidationRules;
  maxRows?: number;
  multiline?: boolean;
  styles?: SxProps<Theme>;
}

const Input: FC<InputProps> = ({
  label,
  variant,
  name,
  control,
  validationRules,
  errors,
  maxRows,
  multiline,
  styles,
}): ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules}
      render={({ field: { ...field } }): ReactElement => (
        <Box className={classes.inputWrapper}>
          <TextField
            {...field}
            id="outlined-basic"
            label={label}
            variant={variant}
            sx={{ ...INPUT_STYLES, ...styles }}
            error={!!errors[name]}
            multiline={multiline}
            maxRows={maxRows}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!!errors[name] && (
                    <Image src="/images/error-plug.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="error" />
                  )}
                </InputAdornment>
              ),
            }}
          />
          {errors[name] && (
            <Typography variant="body2" className={classes.errorText}>
              {errors[name]?.message}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};

export { Input };
