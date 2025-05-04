<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'sku',
        'name',
        'cost_price',
        'selling_price',
        'stock',
        'image',
    ];
}
