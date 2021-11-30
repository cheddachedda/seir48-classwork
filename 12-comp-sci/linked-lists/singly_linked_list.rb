class SinglyLinkedList

  class Node
    attr_accessor :value, :next

    def initialize value=nil
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize value=nil
    @head = Node.new(value) unless value.nil?
  end

  def prepend value
    new_node = Node.new value
    new_node.next = @head
    @head = new_node # the new node is the new head node
  end

  def append value
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node
  end

  # TODO:
  def remove # AKA shift() – remove the first node
  end

  def insert_after node, new_value
  end

  def find value
    # return the node with the matching value, or nil
  end

  # Tricky
  def reverse #non-destructive
  end

  # Trickier
  def reverse! # destructive
  end

  # Trickiest -- how do you accept/invoke a do/end block?
  def each
  end
  # bros.each do |b|
  # end

  # Bonus: .map, .reduce, .select, .reject, .inject, .length AKA .size AKA .count
  # Bonus bonus: .at_index(3) # equivalent bros[3]

end

bros = SinglyLinkedList.new 'Groucho'

require 'pry'
binding.pry
