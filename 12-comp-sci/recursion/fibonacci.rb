# Fibonacci Sequence

require 'pry'

def fibonacci_iterative n     # initial
  a, b = 1, 1
  while n > 2
    # parallel assignment: atomic
    a, b = b, a+b
    n -= 1
  end
  b
end

def fibonacci_recursive n
  @n = n
  @fibonacci = [0, 1];

  if @n <= 1
    return @fibonacci[n]
  end

  def helper i
    if (i > @n)
      return
    end

    next_fib = @fibonacci[i-2] + @fibonacci[i-1]
    @fibonacci << next_fib
    helper i+1
  end

  helper 2
  @fibonacci[@n]
end

binding.pry
