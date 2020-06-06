@extends('character.layout')

@section('title', 'Character List')

@section('content')
    <div id="character-list"></div>
@endsection

@section('scripts')
    <script>
        const characters = @json($characters);
        const pagination = @json($pagination)
    </script>
@endsection