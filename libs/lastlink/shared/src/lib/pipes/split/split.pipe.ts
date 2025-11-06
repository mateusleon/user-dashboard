import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  // Overload: when index is provided, return a single string or null
  transform(
    value: string | null | undefined,
    separator: string,
    index: number
  ): string | null;
  // Overload: when index is omitted, return an array of strings or null
  transform(
    value: string | null | undefined,
    separator?: string,
    index?: undefined
  ): string[] | null;
  // Implementation signature
  transform(
    value: string | null | undefined,
    separator: string = ' ',
    index?: number
  ): string | string[] | null {
    if (!value) {
      return null;
    }

    const parts = value.split(separator);

    if (index !== undefined && index < parts.length) {
      // Return a specific part if an index is provided
      return parts[index] ?? null;
    } else {
      // Return the entire array of parts
      return parts;
    }
  }
}
