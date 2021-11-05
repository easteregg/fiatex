import React from "react";

type TAmountProps = {
  amount: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currency: string;
  validationError: boolean | string;
  onClick: () => void;
};

const Amount = ({
  amount,
  onChange,
  currency,
  validationError,
  onClick,
}: TAmountProps) => {
  const is_disabled = Boolean(validationError) || amount === 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex">
        <input
          className="duration-150 h-10 w-96 bg-white rounded-sm focus:shadow-lg hover:shadow-md outline-none px-4"
          name={currency}
          value={amount}
          type="number"
          min="0"
          onChange={onChange}
        />
        <button
          type="button"
          className={`btn ${is_disabled && 'btn--disabled'}`}
          disabled={is_disabled}
          onClick={onClick}
        >
          Send
        </button>
      </div>

      {validationError && (
        <p className="text-red-500 font-bold mt-3">{validationError}</p>
      )}
    </div>
  );
};

export { Amount };