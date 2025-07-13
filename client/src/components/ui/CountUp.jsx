import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUpLib from 'react-countup';

const CountUp = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <CountUpLib
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
        />
      )}
    </div>
  );
};

export default CountUp;