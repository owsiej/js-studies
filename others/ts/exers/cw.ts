function fn(x: string): string;
function fn(x: number): boolean;
function fn(x: string | number): string| boolean {
  return "oops";
}