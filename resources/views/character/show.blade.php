@extends('character.layout')

@section('title', $character->name)

@section('content')
    <div id="character"></div>
@endsection

@section('scripts')
    <script>
        const character = @json($character);
    </script>
@endsection