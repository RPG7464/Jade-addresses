import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Address.name)
    private addressModel: Model<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    try {
      return await this.addressModel.create(createAddressDto);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return await this.addressModel.find();
  }

  async findOne(id: string) {
    try {
      const address = await this.addressModel.findById(id).exec();
      if (!address) {
        throw new NotFoundException(`The address with id: ${id} was not found`);
      }
      return address;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    try {
      const address = await this.addressModel.findById(id).exec();
      if (!address) {
        throw new NotFoundException(`The address with id: ${id} was not found`);
      }

      return await this.addressModel
        .findByIdAndUpdate(id, updateAddressDto, { new: true })
        .exec();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      const address = await this.addressModel.findById(id).exec();

      if (!address) {
        throw new NotFoundException(`The address with id:${id} was not found`);
      }

      return await this.addressModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
