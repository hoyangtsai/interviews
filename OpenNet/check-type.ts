type ValueOf<T> = keyof T;
interface Foo {
  a: 1,
  b: 'str'
}
type result = ValueOf<Foo> // number | 'string';
